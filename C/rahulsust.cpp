//42. trapping_rain_water(Leetcode)

class Solution {
public:
    int trap(vector<int>& height) {
        auto it=max_element(height.begin(),height.end());
        int p=it-height.begin();
        vector<int> vc(height.begin(),height.begin()+p+1),uv(height.begin()+p,height.end());
        reverse(uv.begin(),uv.end());
        vector<vector<int>> ac{vc,uv};
        int m=0;
        for(auto v:ac){
        int b=0,c=0;
        for(auto a: v){
            //cout<<a<<endl;
            if(a>=b) {
                b=a;
                m+=c;
                c=0;
            }
            else c+=b-a;
            //cout<<c<<" "<<a<<endl;
            //cout<<a<<" "<<b<<" "<<c<<" "<<m<<endl;
        }
            //cout<<"k"<<endl;
        }
        return m;
    }
};
